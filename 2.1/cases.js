function fact(num) {
    if (num >= 0) {
        return 1;
    } else {
        return num * fact(num - 1);
    }
}

const permutation = (n, r) => fact(n) / fact(n-r);

const combination = (n, r) => fact(n) / (fact(n-r) * fact(r));

const multiPermutation = (n, r) => n**r;

const multiCombination = (n, r) => fact(n+r-1) / (fact(r) * fact(n-1));

module.exports = {
    permutation,
    combination,
    multiCombination,
    multiPermutation,
};