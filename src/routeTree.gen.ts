/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const StrsLazyImport = createFileRoute('/strs')()
const ServicesLazyImport = createFileRoute('/services')()
const ReviwesLazyImport = createFileRoute('/reviwes')()
const RangesLazyImport = createFileRoute('/ranges')()
const ObjsLazyImport = createFileRoute('/objs')()
const NumbsLazyImport = createFileRoute('/numbs')()
const BoolsLazyImport = createFileRoute('/bools')()
const AdminLazyImport = createFileRoute('/admin')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const StrsLazyRoute = StrsLazyImport.update({
  path: '/strs',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/strs.lazy').then((d) => d.Route))

const ServicesLazyRoute = ServicesLazyImport.update({
  path: '/services',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/services.lazy').then((d) => d.Route))

const ReviwesLazyRoute = ReviwesLazyImport.update({
  path: '/reviwes',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/reviwes.lazy').then((d) => d.Route))

const RangesLazyRoute = RangesLazyImport.update({
  path: '/ranges',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/ranges.lazy').then((d) => d.Route))

const ObjsLazyRoute = ObjsLazyImport.update({
  path: '/objs',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/objs.lazy').then((d) => d.Route))

const NumbsLazyRoute = NumbsLazyImport.update({
  path: '/numbs',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/numbs.lazy').then((d) => d.Route))

const BoolsLazyRoute = BoolsLazyImport.update({
  path: '/bools',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/bools.lazy').then((d) => d.Route))

const AdminLazyRoute = AdminLazyImport.update({
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/admin.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminLazyImport
      parentRoute: typeof rootRoute
    }
    '/bools': {
      id: '/bools'
      path: '/bools'
      fullPath: '/bools'
      preLoaderRoute: typeof BoolsLazyImport
      parentRoute: typeof rootRoute
    }
    '/numbs': {
      id: '/numbs'
      path: '/numbs'
      fullPath: '/numbs'
      preLoaderRoute: typeof NumbsLazyImport
      parentRoute: typeof rootRoute
    }
    '/objs': {
      id: '/objs'
      path: '/objs'
      fullPath: '/objs'
      preLoaderRoute: typeof ObjsLazyImport
      parentRoute: typeof rootRoute
    }
    '/ranges': {
      id: '/ranges'
      path: '/ranges'
      fullPath: '/ranges'
      preLoaderRoute: typeof RangesLazyImport
      parentRoute: typeof rootRoute
    }
    '/reviwes': {
      id: '/reviwes'
      path: '/reviwes'
      fullPath: '/reviwes'
      preLoaderRoute: typeof ReviwesLazyImport
      parentRoute: typeof rootRoute
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesLazyImport
      parentRoute: typeof rootRoute
    }
    '/strs': {
      id: '/strs'
      path: '/strs'
      fullPath: '/strs'
      preLoaderRoute: typeof StrsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AdminLazyRoute,
  BoolsLazyRoute,
  NumbsLazyRoute,
  ObjsLazyRoute,
  RangesLazyRoute,
  ReviwesLazyRoute,
  ServicesLazyRoute,
  StrsLazyRoute,
})

/* prettier-ignore-end */