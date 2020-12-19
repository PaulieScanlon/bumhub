export interface INavigationItem {
  /** The name of the link */
  name: string
  /** The URL if its an external link */
  url?: string
  /** The route if its an internal link */
  to?: string
}

export interface IMakerConfigOption {
  /** The lable to use as HTML label */
  label: string
  /** The value to use for HTML radio */
  value: string
  /** The checked state of the radio */
  checked: boolean
  /** Optional key to pick color swatch or icon */
  meta: {
    type: 'swatch' | 'svg'
    value: string
  }
}

export interface IMakerConfigItem {
  /** The name of the config group */
  name: string
  /** Array container config options */
  options: IMakerConfigOption[]
  /** The color of the config group */
  color: string
}
