import { useState, useCallback } from 'react';

const useInput = (initialInput) => {
  const [input, setInput] = useState(initialInput);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value}));
  }, []);

  const reset = useCallback(() => setInput(initialInput), [initialInput]);

  return [input, onChange, reset];
};

export {useInput} ;


// function useInput (initialInput: any) {

//   const [input, setInput] = useState(initialInput);

//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setInput((input: any) => ({ ...input, [name]: value }));
//   }, []);

//   const reset = useCallback(() => setInput(initialInput), [initialInput]);

//   return [input, onChange, reset];
// }

// export { useInput };