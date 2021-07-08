(module
  (func $custom (param $x f64) (param $y f64) (result f64)
f64.const 2
f64.const 3
f64.add
)
  (export "custom" (func $custom))
)
    