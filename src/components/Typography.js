import { Typography } from 'antd';
import React from 'react';

function CustomTypography({ children }) {
  return (
    <Typography.Title level={3}>{children}</Typography.Title>
  );
}

export default CustomTypography;



export function CustomTypographyText({children}) {
  return(
    <Typography.Text>{children}</Typography.Text>
  )
}
