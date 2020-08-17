import React, { useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import ErrorSnackbar from 'Components/ErrorSnackbar';
import SessionsList from '../SessionsList';
import Section from 'Components/Section';
import { SessionsListSectionSubtitle } from '../SessionsListSectionSubtitle';

const SectionWrapper = ({ children }) => (
  <Section title='Latest wins' subtitle={<SessionsListSectionSubtitle />}>
    {children}
  </Section>
);

function SessionsQuery(props) {
  const { loading, error, sessions, getSessions } = props;
  useEffect(() => {
    getSessions();
  }, [getSessions]);

  if (loading)
    return (
      <SectionWrapper>
        <LinearProgress style={{ width: '100%' }} />
      </SectionWrapper>
    );
  if (error) return <ErrorSnackbar error={error} />;
  return (
    <SectionWrapper>
      <SessionsList sessions={sessions} />
    </SectionWrapper>
  );
}

export default SessionsQuery;
