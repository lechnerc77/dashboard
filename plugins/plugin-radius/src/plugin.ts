import {
  createApiFactory,
  createApiRef,
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import {
  applicationListPageRouteRef,
  environmentListPageRouteRef,
  resourceListPageRouteRef,
  resourcePageRouteRef,
  rootRouteRef,
} from './routes';
import { RadiusApi } from './api';
import { KubernetesApi, kubernetesApiRef } from '@backstage/plugin-kubernetes';
import { RadiusApiImpl } from './api/api';

export const radiusApiRef = createApiRef<RadiusApi>({
  id: 'radius-api',
});

export const radiusPlugin = createPlugin({
  id: 'radius',
  apis: [
    createApiFactory({
      api: radiusApiRef,
      deps: {
        kubernetesApi: kubernetesApiRef,
      },
      factory: (deps: { kubernetesApi: KubernetesApi }) => {
        return new RadiusApiImpl(deps.kubernetesApi);
      },
    }),
  ],
  routes: {
    root: rootRouteRef,
  },
});

export const EnvironmentListPage = radiusPlugin.provide(
  createRoutableExtension({
    name: 'Environments',
    component: () =>
      import('./components/environments').then(m => m.EnvironmentListPage),
    mountPoint: environmentListPageRouteRef,
  }),
);

export const ApplicationListPage = radiusPlugin.provide(
  createRoutableExtension({
    name: 'Applications',
    component: () =>
      import('./components/applications').then(m => m.ApplicationListPage),
    mountPoint: applicationListPageRouteRef,
  }),
);

export const ResourceListPage = radiusPlugin.provide(
  createRoutableExtension({
    name: 'Resources',
    component: () =>
      import('./components/resources').then(m => m.ResourceListPage),
    mountPoint: resourceListPageRouteRef,
  }),
);

export const ResourcePage = radiusPlugin.provide(
  createRoutableExtension({
    name: 'Resources',
    component: () => import('./components/resources').then(m => m.ResourcePage),
    mountPoint: resourcePageRouteRef,
  }),
);
