export interface INavigationItem {
  /** The name of the link */
  name: string
  /** The URL if its an external link */
  url?: string
  /** The route if its an internal link */
  to?: string
}
