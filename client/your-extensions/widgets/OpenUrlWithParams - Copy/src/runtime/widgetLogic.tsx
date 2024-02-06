import React, { useState } from 'react';

const MyComponent: React.FC = () => {
const [dataSourceUrl, setDataSourceUrl] = useState<string>(''); // Initial value is an empty string

  // Other component logic...

  return (
    <div>
      {/* Your component UI, e.g., input for entering URL  */}
      {<input
        type="text"
        value={dataSourceUrl}
        onChange={(e) => setDataSourceUrl(e.target.value)}
      /> }
    </div>
  );
};

export default MyComponent;
