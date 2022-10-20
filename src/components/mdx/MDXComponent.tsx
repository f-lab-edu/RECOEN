import React from 'react';
import Typography from '@mui/material/Typography';

const MDXComponent = {
  h1: (props: any) => <Typography variant="h1" {...props} />,
  h2: (props: any) => <Typography variant="h2" {...props} mt={5} mb={5} />,
  h3: (props: any) => <Typography variant="h3" {...props} />,
  p: (props: any) => <Typography paragraph {...props} />,
};

export default MDXComponent;
