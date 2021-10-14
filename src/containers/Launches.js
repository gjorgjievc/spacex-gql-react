import React from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchesGrid from '../components/LaunchesGrid';
import Loading from '../components/Loading';

const PAST_LAUNCHES_QUERY =  gql `
{
  launchesPast {
    mission_name
    launch_year
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      mission_patch_small
    }
    rocket {
      rocket {
        id
        description
      }
      rocket_name
    }
    launch_success
    id
  }
}`;

const Launches = (props) => {
    const {data, loading, error } = useQuery(PAST_LAUNCHES_QUERY);
    if (loading) return <Loading />
    if (error) return `Error!`;
    return(
        <LaunchesGrid launches={data.launchesPast} />
    )
}
export default Launches;