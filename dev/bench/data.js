window.BENCHMARK_DATA = {
  "lastUpdate": 1652031722830,
  "repoUrl": "https://github.com/paradust7/benchmarks",
  "entries": {
    "Minetest Performance Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "0e64afd45827ada908b5a7b4429db48b4b830aa5",
          "message": "Minetest: 54bc8a7627529b1736002a3c942858e0d59ceeba | Irrlicht: 372b3642bf524da2694cc09bdc8bdacb23f5fd0e",
          "timestamp": "2022-05-08T15:21:53Z",
          "tree_id": "5b16a400967663c19c49a50e74601df0d46fbe2f",
          "url": "https://github.com/paradust7/benchmarks/commit/0e64afd45827ada908b5a7b4429db48b4b830aa5"
        },
        "date": 1652031722038,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013367,
            "range": "± 0.007356",
            "unit": "us",
            "extra": "100 samples\n2518 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.762076,
            "range": "± 0.013660",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.559692,
            "range": "± 0.063283",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.451911,
            "range": "± 0.168358",
            "unit": "us",
            "extra": "100 samples\n22 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.960721,
            "range": "± 0.417911",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 240.93236,
            "range": "± 17.581173",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 172.33925,
            "range": "± 28.601466",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 500.76145,
            "range": "± 37.248018",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.664426,
            "range": "± 0.046482",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.857378,
            "range": "± 0.065269",
            "unit": "us",
            "extra": "100 samples\n16 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.676618,
            "range": "± 0.075424",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.832669,
            "range": "± 0.216705",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 171.08927,
            "range": "± 13.961202",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 922.43242,
            "range": "± 65.309801",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 170.22326,
            "range": "± 13.129957",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 929.47946,
            "range": "± 467.986487",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.230362,
            "range": "± 0.071472",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.691262,
            "range": "± 0.484552",
            "unit": "us",
            "extra": "100 samples\n4 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.055209,
            "range": "± 0.057454",
            "unit": "us",
            "extra": "100 samples\n29 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.276673,
            "range": "± 0.593253",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 670.93395,
            "range": "± 26.513740",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6678.38981,
            "range": "± 226.876085",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 524.17875,
            "range": "± 51.569023",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4672.60388,
            "range": "± 153.620099",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}