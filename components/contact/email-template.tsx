import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
}

const EmailTemplate = ({
  name,
  message,
}: EmailTemplateProps) => (
  <div>
    <h1>Hello, I am {name}!</h1>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;