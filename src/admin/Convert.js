import React from 'react';
import { withState } from '@ln613/compose';
import { tap } from '@ln613/util';
import { range } from 'ramda';
import { compose, withHandlers } from 'recompose';
import { Label, Button, Icon, Dropdown } from 'semantic-ui-react';
import { admin } from 'utils/actions';

const Convert = ({ file, selectFile, convert, inProgress, folder, setFolder, name, setName, resize, setResize }) =>
  <div>
    <div>
      <Label width="4" as="label" htmlFor="file" color="orange" size="large" className="cp">
        <Icon name="file" />
        Select a file...
      </Label>
      <div>{(file || {}).name}</div>
      <input id="file" hidden type="file" onChange={selectFile} />
      <div class="mt8">Folder: <Dropdown selection options={range(1, 10).map(x => ({ text: `slider${x === 1 ? '' : ('-' + x)}`, value: `slider${x === 1 ? '' : ('-' + x)}` }))} defaultValue="slider" style={{ width: '100px'}} onChange={(e, x) => setFolder(x.value)} /></div>
      <div class="mt8">File: <Dropdown selection options={range(1, 10).map(x => ({ text: x, value: x }))} defaultValue={1} onChange={(e, x) => setName(x.value)} /></div>
      <div class="mt8">Resize: <Dropdown selection options={['1500x500', '666x500'].map(x => ({ text: x, value: x }))} defaultValue="1500x500" onChange={(e, x) => setResize(x.value)} /></div>
    </div>
    <div class="mt8">
      <Button primary onClick={() => convert(file, folder, name, resize)} disabled={!file || inProgress}>Convert &amp; Upload</Button>
      {inProgress && <div class="ui active inline loader medium"></div>}
    </div>
    
  </div>

export default compose(
  withState('file'),
  withState('inProgress'),
  withState('folder', 'slider'),
  withState('name', '1'),
  withState('resize', '1500x500'),
  withHandlers(({
    selectFile: p => () => p.setFile(((document.getElementById('file') || {}).files || [])[0]),
    convert: ({ setInProgress }) => async (file, folder, name, resize) => {
      tap(folder); tap(name); tap(resize);
      setInProgress(true);
      const fd = new FormData();
      fd.append('upload_preset', 'baicr6sd');
      fd.append('file', file);
      const c = await post('https://api.cloudinary.com/v1_1/vttc/raw/upload', fd, true);
      const p = await post('https://api.cloudconvert.com/v1/process', { inputformat: 'docx', outputformat: 'png' }, false, 'Bearer bpeNFC52jeIx3SkL6VHjhqjYamwGjvK8RCm5Gg2fAtqIKysMmjuhx6Hb2B6oHa3i');
      const s = await post(p.url, { outputformat: 'png', input: 'download', file: c.url, wait: true, filename: '1.docx', converteroptions: { resize, resizemode: 'scale', quality: 75 } });
      tap(await post(admin + 'cdupload=1', { url: 'https:' + s.output.url, folder, name }, false, localStorage.getItem('token')));
      //await post('https://api.cloudinary.com/v1_1/vttc/image/upload', { upload_preset: 'baicr6sd', file: 'https:' + s.output.url });
      setInProgress(false);
    }
  })),
)(Convert);

const post = (url, params, isUpload, key) => fetch(url, {
  method: 'post',
  headers: {
    ...(key ? { Authorization: key } : {}),
    ...(isUpload ? {} : { 'Content-Type': 'application/json' }),
  },
  body: isUpload ? params : JSON.stringify(params)
}).then(r => r.json());