import React from 'react';
const Trees = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No trees, sorry</p>;
  return (
    <div>
      {repos.map((repo) => {
        return (
          <p key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>({repo.height}cm)</span>
          </p>
        );
      })}
    </div>
  );
};
export default Trees;