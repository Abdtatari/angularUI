export interface ContainerExpirationPolicy {
    cadence: string
    enabled: boolean
    keep_n: number
    older_than: string
    name_regex: string
    name_regex_keep: string
    next_run_at: string
  }
  