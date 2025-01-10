```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation to fetch data
    setTimeout(() => {
      setData({ name: 'John Doe', age: 30 });
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!data) {
    return <Text>Error: No data found.</Text>; 
  }

  return (
    <View>
      <Text>Name: {data.name}</Text>
      <Text>Age: {data.age}</Text>
    </View>
  );
};

export default MyComponent;
```