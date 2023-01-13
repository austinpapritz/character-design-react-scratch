import React from 'react';

export default function Scoreboard({ headCount, bodyCount, bottomCount }) {
  return (
    <>
      <p>You have changed the head {headCount} times.</p>
      <p>You have changed the head {bodyCount} times.</p>
      <p>You have changed the head {bottomCount} times.</p>
    </>
  );
}
