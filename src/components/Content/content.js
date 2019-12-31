import React, {useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';

import {addNameCandidate} from '../../store/modules/candidate/actions';

import './content.css';

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
  
  return (
    <div className="Content-container">
      Parabéns {candidate.name}, você finalizou o seu mini-teste.
    </div>
  );
}

export default connect()(Content)