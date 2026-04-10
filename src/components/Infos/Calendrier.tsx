export default function Calendrier() {
    return (
        <>
            <section>
                {/* <script type="text/javascript" src="https://rdv.domaine-existant.be/resscom/jquery/iframe-resizer/iframeResizer.min.js"></script>
 
<iframe id="frmPrpi" src="https://rdv.domaine-existant.be/client-medoffice/index.php" scrolling="no" style="width:100%;" frameborder="0"></iframe>
 
<script type="text/javascript">
function recupParamG() {
     var paramrec = new Array();
     var indPETrv = window.location.search.lastIndexOf("?");
     if (indPETrv != -1) {
           var rstRec = window.location.search.substring(indPETrv + 1);
           var tabcplRec = rstRec.split('&');
           for (var ipr = 0; ipr < tabcplRec.length; ipr++) {
                var tmpTabDec = tabcplRec[ipr].split('=');
                paramrec[tmpTabDec[0]] = tmpTabDec[1];
           }
     }
     return paramrec;
}
 
var tabVarRec = recupParamG();
 
if ((tabVarRec["tp"] != undefined) && (tabVarRec["id"] != undefined)) {
     document.getElementById("frmPrpi").src = document.getElementById("frmPrpi").src + "?tp=" + tabVarRec["tp"] + "&id=" + tabVarRec["id"];
}
 
iFrameResize();
 
</script> */}
            </section>
        </>
    )
}