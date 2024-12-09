function drawRace(indices: number[], length: number): string {
  const numberOfReindeer = indices.length;
  const reindeers: string[] = []
  
  indices.forEach((position, index) => {
    const reindeer = [..."~".repeat(length)]
    
    if(position != 0) {
      reindeer[(position + length)  % length] = 'r'
    }
    
    reindeers.push([
      " ".repeat(numberOfReindeer - index - 1),
     reindeer.join(""),
      ` /${index + 1}`
    ].join(""))
  })
  
  return reindeers.join("\n")
}

drawRace([0, 5, -3], 10);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/