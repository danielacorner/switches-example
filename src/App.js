import React from 'react';

function App() {
  // RULES:
  // 1. only 2 checkboxes can be checked
  // 2. cb1 and cb2 cannot both be checked

  const onChange = event => {
    const cbIndex = +event.target.getAttribute('data-index');
    // since the checkboxes are now "controlled" (their checked attr is set by React)
    // we must manually toggle this box's checked state
    setCheckedBoxes([
      ...checkedBoxes.slice(0, cbIndex),
      !checkedBoxes[cbIndex],
      ...checkedBoxes.slice(cbIndex + 1),
    ]);
  };

  const [checkedBoxes, setCheckedBoxes] = React.useState(
    new Array(4).fill(false)
  );

  const numCheckedBoxes = checkedBoxes.filter(checked => checked).length;

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div>1</div>
        <input
          type="checkbox"
          name="cb1"
          id="cb1"
          data-index={0}
          checked={checkedBoxes[0]}
          // 1. only 2 checkboxes can be checked
          disabled={
            (!checkedBoxes[0] && numCheckedBoxes > 1) ||
            // 2. cb1 and cb2 cannot both be checked
            checkedBoxes[1]
          }
          onChange={onChange}
        />
        <div>2</div>
        <input
          type="checkbox"
          name="cb2"
          id="cb2"
          data-index={1}
          checked={checkedBoxes[1]}
          disabled={
            // 1. only 2 checkboxes can be checked
            (!checkedBoxes[1] && numCheckedBoxes > 1) ||
            // 2. cb1 and cb2 cannot both be checked
            checkedBoxes[0]
          }
          onChange={onChange}
        />
        <div>3</div>
        <input
          type="checkbox"
          name="cb3"
          id="cb3"
          data-index={2}
          checked={checkedBoxes[2]}
          // 1. only 2 checkboxes can be checked
          disabled={!checkedBoxes[2] && numCheckedBoxes > 1}
          onChange={onChange}
        />
        <div>4</div>
        <input
          {...{
            type: 'checkbox',
            name: 'cb4',
            id: 'cb4',
            'data-index': 3,
            checked: checkedBoxes[3],
            // 1. only 2 checkboxes can be checked
            disabled: !checkedBoxes[3] && numCheckedBoxes > 1,
            onChange,
          }}
        />
      </div>
    </div>
  );
}

export default App;
