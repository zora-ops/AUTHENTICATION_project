import { useState } from 'react';

import { Eye, EyeOff} from 'lucide-react'

const PasswordInput = ({value, onChange}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <div className='relative w-full'>
      <input
        type={visible ? 'text' : 'password'}
        placeholder="Enter password"
        value={value}
        onChange={onChange}
        className="w-full outline-none bg-transparent text-white placeholder:text-gray-400"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400 overflow-hidden"
      >
        {visible ? <Eye /> : <EyeOff />}
      </button>
    </div>
  );
};

export default PasswordInput;
