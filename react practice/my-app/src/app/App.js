import React from 'react';

import name,{a,b,c} from '../function'
import {abc} from '../test/object'

const app=()=>{

  return (

    <div>
      
{abc(2,3)}

    {a},{b},{c},{name}

    </div>
  );
}

export default app;
