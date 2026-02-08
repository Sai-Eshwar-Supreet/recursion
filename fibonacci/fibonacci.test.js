import { fibs, fibsRec } from './fibonacci';

describe('Fibonacci',
    () => {
        test( 'Base Case (1)',
            () => {
                expect(fibs(4)).toEqual([0, 1, 1, 2]);
                expect(fibsRec(4)).toEqual([0, 1, 1, 2]);
            }
        );

        test( 'Base Case (2)',
            () => {
                expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
                expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
            }
        );
    }
)