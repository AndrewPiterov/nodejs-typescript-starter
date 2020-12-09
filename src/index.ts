import * as dotenv from 'dotenv';

dotenv.config();

const { SOME_VAR } = process.env;

(async () => {
  console.log(`Hello, ${SOME_VAR}`);

  for (let i = 0; i < 10; i++) {
    //   console.log(i);
  }
})();
