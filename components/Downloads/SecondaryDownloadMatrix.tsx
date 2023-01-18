import { useNextraContext } from '../../hooks/useNextraContext';

import type { NodeVersionData, LegacyDownloadsFrontMatter } from '../../types';
import DownloadList from './DownloadList';

type SecondaryDownloadMatrixProps = Pick<NodeVersionData, 'node'>;

const SecondaryDownloadMatrix = (props: SecondaryDownloadMatrixProps) => {
  const nextraContext = useNextraContext();

  const { additional } =
    nextraContext.frontMatter as LegacyDownloadsFrontMatter;

  return (
    <section>
      <h2>{additional.headline}</h2>
      <table className="download-matrix full-width">
        <tbody>
          <tr>
            <th>{additional.DockerImage}</th>
            <td>
              <a href="https://hub.docker.com/_/node/">
                {additional.officialDockerImage}
              </a>
            </td>
          </tr>

          <tr>
            <th>{additional.LinuxPowerSystems}</th>
            <td>
              <a
                href={`https://nodejs.org/dist/${props.node}/node-${props.node}-linux-ppc64le.tar.xz`}
              >
                64-bit
              </a>
            </td>
          </tr>

          <tr>
            <th>{additional.LinuxSystemZ}</th>
            <td>
              <a
                href={`https://nodejs.org/dist/${props.node}/node-${props.node}-linux-s390x.tar.xz`}
              >
                64-bit
              </a>
            </td>
          </tr>
          <tr>
            <th>{additional.AIXPowerSystems}</th>
            <td>
              <a
                href={`https://nodejs.org/dist/${props.node}/node-${props.node}-aix-ppc64.tar.gz`}
              >
                64-bit
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <DownloadList node={props.node} />
    </section>
  );
};

export default SecondaryDownloadMatrix;
