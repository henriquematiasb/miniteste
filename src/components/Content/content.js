import React, {useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';

import { addNameCandidate } from '../../store/modules/candidate/actions';

function Content() {
  const dispatch = useDispatch()
  const candidate = useSelector(state => state.candidate)

  useEffect(() => {
    function handleGetCandidateName() {
      setTimeout(() => {
        dispatch(addNameCandidate())
      }, 20000)
    }

    handleGetCandidateName()
  }, [dispatch])
  
  const fontSize = 36;

  return (
    <div style={{ color: 'white', fontSize: fontSize }}>
      Parabéns { candidate.name}, você finalizou o seu mini-teste.
    </div>
  );
}

export default connect()(Content)