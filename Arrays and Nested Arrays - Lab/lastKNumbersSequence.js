function lastKNumbersSequence (n, k){
    let o = Number(n);
    let p = Number(k);
    let g = [1];
    let h = 1;
    let b = p - p * 2;
    while (h < o){
        let s = g.slice(b);
        let m = s.reduce((x,y) => x + y);
        g.push(m);
      h++;
    }
    return g;
   
}


lastKNumbersSequence(6, 3);