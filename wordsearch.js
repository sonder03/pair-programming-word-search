const wordSearch = (letters, word) => { 

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (line of horizontalJoin) {
        if (line.includes(word)) return true
    }

    let tr = transpose(letters)

    const verticalJoin = tr.map(ls => ls.join(''))
    for (line of verticalJoin) {
        if (line.includes(word)) return true
    }

    return false;
}



const transpose = function (matrix) { 
  
    var newMatrix = [];
      for(var colIndex = 0; colIndex < matrix[0].length; colIndex++){
          newMatrix.push([]);
      };
  
      for(var rowIndex = 0; rowIndex < matrix.length; rowIndex++){
  
          for(var colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++){
  
              newMatrix[colIndex].push(matrix[rowIndex][colIndex]);
          };
      };
  
      return newMatrix;
  };

module.exports = wordSearch

