<script language="javascript">
function fCheckNum(Isi){
if(isNaN(Isi.value)==true){ Isi.value="";Isi.focus();}else{fCalculate();}

}
function fCalculate(){
  var ekor=0;
  var ekor1=0
  var kop=0;
  var asi=0;
  var j;
  //with (document.all.item("totfrm").tags("INPUT")){
  with (document.getElementById("totfrm").getElementsByTagName("INPUT")){
  for(j=0;j<7;j++){
    if (item(j).value==""){
       ekor=parseInt(ekor);
       }else{
       if (j==1||j==2||j==3||j==4){
          ekor1=parseInt(ekor1)+parseInt(item(j).value);
          if (j==1||j==2){
             asi=parseInt(asi)+parseInt(item(j).value);
          }else{
             kop=parseInt(kop)+parseInt(item(j).value);
          }
       }else{ekor=parseInt(ekor)+parseInt(item(j).value);}
       }
  }
  ekor = ekor+ekor1*2;
  ekor=ekor.toString();
  ekor=ekor.substr(parseInt(ekor.length)-2);
  asi=asi.toString();
  asi=asi.substr(parseInt(asi.length)-1);
  kop=kop.toString();
  kop=kop.substr(parseInt(kop.length)-1);
  item(7).value=asi+kop+ekor;
  }
  //document.getElementByName("varCrtl").value=document.getElementById("totfrm").getElementsByTagName("INPUT").item(7).value;
}
function fHapus(){
  var j;
  with (document.getElementById("totfrm").getElementsByTagName("INPUT")){
  for(j=0;j<8;j++)
      item(j).value="";
}
document.getElementById("totfrm").getElementsByTagName("INPUT").item(0).focus();
}
                             </script>
                  
    
  document.write('document.write(" <form id=\"totfrm\" name=\"totfrm\">"); 
document.writeln("                      <div align=\"center\">"); 
document.writeln("                        <center>"); 
document.writeln("                      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#111111\" width=\"236\" height=\"203\">"); 
document.writeln("                        <tbody><tr>"); 
document.writeln("                          <td width=\"450\" height=\"16\" colspan=\"6\" bgcolor=\"#A2A2A2\">"); 
document.writeln("                          <p style=\"margin-top: 0; margin-bottom: 0\" align=\"center\"><b>"); 
document.writeln("                          <font face=\"Arial\" size=\"2\" color=\"#FFFFFF\">Winning "); 
document.writeln("                          Numbers</font></b></p></td>"); 
document.writeln("                        </tr>"); 
document.writeln("                        <tr>"); 
document.writeln("                          <td width=\"40\" height=\"36\" align=\"center\">"); 
document.writeln("      <input type=\"text\" class=\"inp1\" maxlength=\"2\" onkeyup=\"fCheckNum(this)\" size=\"1\"></td>"); 
document.writeln("                          <td width=\"40\" height=\"36\" align=\"center\">"); 
document.writeln("      <input type=\"text\" class=\"inp1\" maxlength=\"2\" onkeyup=\"fCheckNum(this)\" size=\"1\"></td>"); 
document.writeln("                          <td width=\"40\" height=\"36\" align=\"center\">"); 
document.writeln("      <input type=\"text\" class=\"inp1\" maxlength=\"2\" onkeyup=\"fCheckNum(this)\" size=\"1\"></td>"); 
document.writeln("                          <td width=\"40\" height=\"36\" align=\"center\">"); 
document.writeln("      <input type=\"text\" class=\"inp1\" maxlength=\"2\" onkeyup=\"fCheckNum(this)\" size=\"1\"></td>"); 
document.writeln("                          <td width=\"40\" height=\"36\" align=\"center\">"); 
document.writeln("      <input type=\"text\" class=\"inp1\" maxlength=\"2\" onkeyup=\"fCheckNum(this)\" size=\"1\"></td>"); 
document.writeln("                          <td width=\"40\" height=\"36\" align=\"center\">"); 
document.writeln("<input type=\"text\" class=\"inp1\" maxlength=\"2\" onkeyup=\"fCheckNum(this)\" size=\"1\"></td>"); 
document.writeln("                        </tr>"); 
document.writeln("                        <tr>"); 
document.writeln("                          <td width=\"450\" height=\"13\" colspan=\"6\" bgcolor=\"#A2A2A2\">"); 
document.writeln("                          <p align=\"center\"><b>"); 
document.writeln("                          <font face=\"Arial\" size=\"2\" color=\"#FFFFFF\">Additional "); 
document.writeln("                          Number</font></b></p></td>"); 
document.writeln("                        </tr>"); 
document.writeln("                        <tr>"); 
document.writeln("                          <td width=\"450\" height=\"35\" colspan=\"6\">"); 
document.writeln("                                   <p align=\"center\">"); 
document.writeln("                                   <input class=\"inp1\" maxlength=\"2\" onkeyup=\"fCheckNum(this)\" size=\"1\" name=\"1\"></p></td>"); 
document.writeln("                        </tr>"); 
document.writeln("                        <tr>"); 
document.writeln("                          <td width=\"450\" height=\"16\" colspan=\"6\" bgcolor=\"#A2A2A2\">"); 
document.writeln("  <p align=\"center\">"); 
document.writeln("  <b>"); 
document.writeln("  <font face=\"Arial\" size=\"2\" color=\"#FFFFFF\">4 Digit Results</font></b></p></td>"); 
document.writeln("                        </tr>"); 
document.writeln("                        <tr>"); 
document.writeln("                          <td width=\"450\" height=\"46\" colspan=\"6\">"); 
document.writeln("                                   <p align=\"center\">"); 
document.writeln("                                   <span><font face=\"Times New Roman\">"); 
document.writeln("                                   <input type=\"text\" name=\"Tickt\" readonly=\"true\" size=\"3\" style=\"border:1px solid #FFFFFF; font-family:Arial; font-weight:bold; font-size:14pt; background-color:#A2A2A2; text-align:center; color:#000080\"></font></span></p></td>"); 
document.writeln("                        </tr>"); 
document.writeln("                        <tr>"); 
document.writeln("                          <td width=\"450\" height=\"36\" colspan=\"6\">"); 
document.writeln("<p style=\"margin-top: 0; margin-bottom: 0\" align=\"center\">"); 
document.writeln("<tr'><input type=\"button\" name=\"hapus\" id=\"hapus0\" onclick=\"fHapus()\" value=\"Clear\"><font size=\"1\"><font face=\"Arial\"> </font></font></tr'></p></td>"); 
document.writeln("                        </tr>"); 
document.writeln("                      </tbody></table>"); 
document.writeln(""); 
document.writeln("                        </center>"); 
document.writeln("                      </div>"); 
document.writeln(""); 
document.writeln("</form>");')