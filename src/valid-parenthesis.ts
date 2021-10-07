function isValid(s: string): boolean {
    //need two objects with open chars and closed
    
    //idea: parse through string and push all the open ones into stack
    // while parsing the closed ones compare with the popped ones from the stack
    // if they don't match order ruined so return false
    
    if(s.length ===1){return false}
    let legend = new Map();
     legend.set('(',')');
     legend.set('{','}');
     legend.set('[',']');
   
   // let visited:any={};
    
    let stackArr =[];
    for(let char of s){
        if(legend.has(char)){
            //visited[char]=true;
            stackArr.push(char);
        }else{
            if(char !== legend.get(stackArr.pop())){
                return false
            }
        }
    }
    return stackArr.length>0 ? false:true;
    
};

//isValid("(([]){})");
//isValid("{[]}");
isValid("()[]{}");
