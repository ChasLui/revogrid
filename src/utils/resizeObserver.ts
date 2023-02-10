export async function resizeObserver() {
  if (!('ResizeObserver' in window)) {
    const module = await import('@juggle/resize-observer');
    // @ts-ignore
    window.ResizeObserver = (module.ResizeObserver as unknown) as typeof ResizeObserver;
  }
}
