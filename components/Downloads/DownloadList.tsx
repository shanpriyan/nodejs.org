import { FormattedMessage } from 'react-intl';
import LocalisedLink from '../LocalisedLink';
import { useNavigation } from '../../hooks/useNavigation';

import type { NodeVersionData } from '../../types';

type DownloadListProps = Pick<NodeVersionData, 'node'>;

const DownloadList = (props: DownloadListProps) => {
  const { getSideNavigation } = useNavigation();

  const [, ...downloadNavigation] = getSideNavigation('download', {
    shaSums: { nodeVersion: props.node },
    allDownloads: { nodeVersion: props.node },
  });

  return (
    <section>
      <ul>
        {downloadNavigation.map((item, key) => (
          <li key={key}>
            <LocalisedLink href={item.link}>{item.text}</LocalisedLink>
            {item.key === 'shaSums' && (
              <a href="https://github.com/nodejs/node#verifying-binaries">
                <FormattedMessage id="components.downaloadList.links.shaSums.howToVerify" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DownloadList;
