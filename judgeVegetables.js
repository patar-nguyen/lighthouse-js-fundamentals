const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
  let topName = vegetables[0].submitter;
  let topMetric = vegetables[0][metric];

  for(let i = 1; i < vegetables.length; i++){
    if(vegetables[i][metric] > topMetric){
      topMetric = vegetables[i][metric];
      topName = vegetables[i].submitter;
    }
  }
  return topName;
}
const metric = 'redness'
  
console.log(judgeVegetable(vegetables, metric));