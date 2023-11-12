function deafGrandma() {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Say something to grandma... ', (speech) => {

    let grandmaResponse = (speech == null) ? 'WHAT?!' : (speech === speech.toLowerCase()) ? 'SPEAK UP, KID!' : 'NO, NOT SINCE 1946!';
    console.log(grandmaResponse);

    rl.question('Say goodbye to grandma...', (salutation) => {
      count = 1;
      if (salutation !== null && salutation === 'GOODBYE!' && count < 2) {
        count++;
        console.log('LEAVING SO SOON!');
      }

      rl.question('Say goodbye to grandma...', (salutation) => {
        count = 2;
        if (salutation !== null && salutation === 'GOODBYE!' && count == 2) {
          console.log('LATER, SKATER!');
        }
        rl.close();
      });
    });

  });
}

deafGrandma();
