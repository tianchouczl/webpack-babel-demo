  function nb () {
    let a = [1, 2 ,3]
    a.includes(1)
    let cubed = 2 ** 3
    "abcdefg".split('').reverse().join('')
    console.log('nb')
    console.log('I get called from print.js!!');
    test();
  }

  function test() {
    let x = 100;
    let y = 20;
    let a = do {
      if(x > 10) {
        if(y > 20) {
          'big x, big y';
        } else {
          'big x, small y';
        }
      } else {
        if(y > 10) {
          'small x, big y';
        } else {ç
          'small x, small y';
        }
      }
    };
    console.log(a)
  }
  window.onload = nb;