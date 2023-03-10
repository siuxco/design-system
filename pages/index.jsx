const styles = {
  container: 'padding-left-s padding-right-s container-desktop',
  grid: 'display-flex flex-wrap',
  main: 'display-flex flex-direction-column justifiy-content-center align-items-center padding-top-xxl padding-bottom-m',
  title: 'display-flex align-items-center text-align-center color-neutral-7 font-size-xl',
  subtitle: 'color-black font-size-m font-weight-600 margin-top-m margin-left-s tablet:margin-left-m',
  description: 'text-align-center margin-top-m margin-bottom-m line-height-l font-size-s',
  code: 'background-opacity-neutral-2 color-neutral-8 font-weight-500 margin-left-xxs margin-right-xxs border-radius-xs padding-xxs padding-left-xs padding-right-xs border-style-solid border-width-1 border-neutral-2 font-size-s font-family-secondary'
}

export default function Home() {
  return (
    <div className={styles.container}></div>
  )
}