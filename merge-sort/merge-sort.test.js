import { mergeSort } from './merge-sort';

describe('Merge Sort',
    () => {
        test( 'Empty array returns an empty array',
            () => {
                expect(mergeSort([])).toEqual([]);
            }
        );

        test( 'Single element sort returns the same array',
            () => {
                expect(mergeSort([73])).toEqual([73]);
            }
        );

        test( 'Sorted array returns the same array',
            () => {
                expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
            }
        );

        test( 'sorts an unsorted array (1) ',
            () => {
                expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
            }
        );

        test( 'sorts an unsorted array (1) ',
            () => {
                expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
            }
        );
    }
)