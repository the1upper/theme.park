
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>  
           _      _____  _________ ______________  __________\r
          | | \/| \/ \/ _ \\\/ ___\/ __ \`\/ ___\/ ___\/ _ \\\/ ___\/ ___\/\r
          | |\/ |\/ \/  __(__  ) \/_\/ \/ \/__\/ \/__\/  __(__  |__  ) \r
          |__\/|__\/\\___\/____\/\\__,_\/\\___\/\\___\/\\___\/____\/____\/  \r
                                                     
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
