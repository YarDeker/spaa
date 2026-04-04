import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const update_req = req.clone({
    url: `http://localhost:3000/${req.url}`
  })

  return next(update_req);
};
