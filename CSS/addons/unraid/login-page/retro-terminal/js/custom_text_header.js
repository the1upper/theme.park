
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
 _      _____  _________ ______________  __________\r\n
| | \/| \/ \/ _ \\\/ ___\/ __ \`\/ ___\/ ___\/ _ \\\/ ___\/ ___\/\r\n
| |\/ |\/ \/  __(__  ) \/_\/ \/ \/__\/ \/__\/  __(__  |__  ) \r\n
|__\/|__\/\\___\/____\/\\__,_\/\\___\/\\___\/\\___\/____\/____\/  \r\n  
                                                     
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
