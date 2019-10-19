import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { Button, Loader } from 'semantic-ui-react';
import { connect } from '@ln613/state';
import actions from 'utils/actions';
import { withSuccess } from 'utils/ui';
import { withMobile } from '@ln613/ui/semantic';

const initialRatings = JSON.parse('{"3":600,"4":390,"5":245,"6":100,"7":1923,"8":500,"9":555,"10":618,"11":478,"13":323,"14":359,"15":1588,"16":473,"17":213,"18":360,"19":600,"20":500,"21":1938,"22":100,"23":1014,"24":624,"25":1154,"26":100,"27":1860,"28":487,"29":555,"30":100,"31":1344,"32":100,"33":474,"34":1154,"35":419,"36":1102,"37":1778,"38":661,"39":757,"40":347,"41":100,"42":100,"43":726,"44":1590,"45":250,"46":111,"47":100,"48":100,"49":970,"50":250,"51":381,"52":1830,"53":949,"54":693,"55":1757,"56":2365,"57":1630,"58":315,"59":750,"60":150,"61":473,"62":100,"63":287,"64":531,"65":100,"66":576,"67":100,"69":1847,"70":863,"71":556,"72":754,"73":100,"74":472,"75":327,"76":390,"77":296,"78":2851,"79":500,"80":2039,"81":1350,"83":600,"84":100,"85":100,"86":100,"87":859,"88":800,"89":600,"90":500,"91":100,"92":600,"93":700,"94":400,"95":500,"96":1154,"97":1678,"98":2011,"99":507,"100":1755,"101":1858,"102":1674,"103":1383,"104":1258,"105":1811,"106":1087,"107":832,"108":826,"109":790,"110":750,"111":1061,"112":104,"113":150,"114":764,"115":1180,"116":628,"117":384,"118":213,"120":550,"121":200,"122":488,"123":200,"124":100,"125":900,"126":700,"127":2200,"128":550,"129":100,"131":567,"132":100,"133":100,"134":888,"135":700,"136":622,"137":200,"138":2050,"139":350,"140":2173,"141":1640,"142":1619,"143":1835,"144":200,"145":500,"146":1947,"147":883,"148":1680,"149":300,"150":500,"151":620,"152":350,"153":250,"154":306,"155":125,"156":175,"157":150,"158":150,"159":100,"160":150,"161":150,"162":150,"163":365,"164":100,"165":100,"166":368,"167":100,"168":300,"169":150,"170":150,"171":250,"172":598,"173":400,"174":492,"175":1407,"176":1261,"177":855,"178":1092,"179":551,"180":1400,"181":1596,"182":2644,"183":1216,"184":2297,"185":2047,"186":2785,"187":2610,"188":1547,"189":2029,"190":1996,"191":1900,"192":1735,"194":1600,"195":1119,"196":1068,"197":1554,"198":846,"199":550,"200":200,"201":500,"202":350,"203":150,"204":1574,"205":2473,"206":2195,"207":1500,"208":2329,"209":505,"210":500,"211":500,"212":300,"213":100,"214":150,"215":300,"216":200,"217":100,"218":100,"219":160,"220":190,"221":270,"222":150,"223":100,"224":180,"225":2048,"227":100,"228":200,"229":700,"230":131,"231":200,"232":1900,"233":2500,"234":2200,"235":2500,"236":1600,"237":1900,"238":1771,"239":1800,"240":1250,"241":1209,"242":1200,"243":500,"244":200,"245":1138,"246":988,"247":1050,"248":1050,"249":707,"250":1525,"251":539,"252":729,"253":444,"254":850,"255":905,"256":-1,"258":298,"259":302,"260":150,"261":250,"263":106,"264":250,"265":360,"266":200,"267":163,"268":100,"269":250,"270":800,"271":300,"272":900,"273":962,"274":1083,"275":100,"276":150,"277":150,"278":150,"279":1104,"280":1038,"281":785,"282":200,"283":100,"284":150,"285":700,"286":1232,"287":1191,"288":148,"289":1100,"290":1155,"291":558,"292":200,"293":100,"294":479,"295":784,"296":1185,"297":711,"298":1600,"299":934,"300":1175,"301":1237,"302":100,"303":163,"304":200,"305":248,"306":100,"307":878,"308":1279,"309":1177,"310":100,"311":311,"312":316,"313":277,"314":915,"315":1589,"316":100,"317":225,"318":297,"319":-1,"320":1739,"321":321,"322":100,"323":244,"324":500,"325":100,"326":250,"327":800,"328":100,"329":286,"330":100,"331":475,"332":295,"333":154,"334":329,"335":519,"336":100,"337":100,"338":1350,"339":100,"340":100,"341":100,"342":100,"343":1300,"344":600,"345":100,"346":200,"347":200,"348":139,"349":100,"350":100,"351":100,"352":200,"353":200,"354":150,"355":1300,"356":600,"357":2200,"358":200,"359":359,"360":200,"361":1600,"362":1031,"363":300,"364":1560,"365":100,"366":400,"367":1193,"368":1705,"369":300,"370":100,"371":2300,"372":1200,"373":1510,"374":2269,"375":1715,"376":1300,"377":1100,"378":847,"379":686,"380":1570,"381":1887,"382":176,"383":100,"384":100,"385":100,"386":1079,"387":100,"388":1451,"389":100,"390":100,"391":800,"392":100,"393":800,"394":100,"395":100,"396":700,"397":200,"398":100,"399":400,"400":500,"401":100,"402":2408,"403":600,"404":626,"405":2000,"406":1700,"407":1300,"408":2531,"409":100,"410":250,"411":2300,"412":2067,"413":100,"414":100,"415":100,"416":100,"417":100,"418":100,"419":300,"420":400,"421":100,"422":100,"423":100,"424":0,"425":100,"426":100,"427":1719,"428":100,"429":600,"430":400,"431":100,"432":100,"433":100,"434":100,"435":100,"436":100,"437":300,"438":100,"439":2250,"440":2096,"441":500,"442":2450,"443":600,"444":400,"445":500,"446":2282,"447":2400,"448":2200,"449":2228,"450":1414,"451":2000,"452":2161,"453":100,"454":956,"455":1248,"456":1700,"457":100,"458":100,"459":100,"460":100,"461":100,"462":500,"463":900,"464":2300,"465":812,"466":1399,"467":100,"468":1800,"469":2100,"470":100,"471":779,"472":118,"473":300,"474":634,"475":100,"476":1449,"477":100,"478":1546,"479":100,"480":100,"481":547,"482":1081,"483":1763,"484":100,"485":100,"486":100,"487":100,"488":100,"489":100,"490":100,"491":100,"492":100,"493":100,"494":1323,"495":931,"496":100,"497":100,"498":1122,"499":100,"500":558,"501":963,"502":100,"503":100,"504":100,"505":700,"506":100,"507":100,"508":100,"509":924,"510":1149,"511":169,"512":700,"513":100,"514":600,"515":100,"516":283,"517":1839,"518":1200,"519":856,"520":100,"521":2101,"522":2009,"523":100,"524":100,"525":1711,"526":100,"527":100,"528":100,"529":600,"530":1007,"531":100,"532":100,"533":100,"534":100,"535":1778,"536":100,"537":100,"538":100,"539":100,"540":100,"541":100,"542":1285,"543":1745,"544":500,"545":2000,"546":100,"547":100,"548":100,"549":1800,"550":885,"551":100,"552":250,"553":100,"554":550,"555":450,"556":100,"557":100,"558":100,"559":2100,"560":1310,"561":100,"562":670,"563":670}');

const AdminMenu = p =>
  p.isLoading ? <Loader active /> :
  <Fragment>
    <div class={`ui top attached ${p.isMobile ? 'three item' : 'vertical'} menu`}>
      <Link class="item" to="/admin">Home</Link>
      <Link class="item" to="/admin/convert">Convert</Link>
      <Link class="item" to="/admin/products">Products</Link>
    </div>
    <div class={`ui bottom attached ${p.isMobile ? 'three item' : 'vertical'} menu`}>
      <Link class="item" onClick={() => p.patchUpdateRating(initialRatings)} to="#">Update Ratings</Link>
      <Link class="item" to="/admin/players">Players</Link>
      <Link class="item" to="/admin/tournaments">Tournaments</Link>
    </div>
  </Fragment>

export default compose(
  connect(null, actions),
  withSuccess('updaterating', () => alert('Ratings updated'), () => alert('Error happened!')),
  withMobile
)(AdminMenu);
