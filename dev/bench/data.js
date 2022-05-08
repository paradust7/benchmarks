window.BENCHMARK_DATA = {
  "lastUpdate": 1652050760414,
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
      },
      {
        "commit": {
          "author": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "committer": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "distinct": true,
          "id": "a1dc48b3e0a3d2f0f38de8cdbd638123cecfd869",
          "message": "Testing a fix",
          "timestamp": "2022-05-08T19:05:38Z",
          "tree_id": "76451acc791d90b1f646c9546e4f258131c7569c",
          "url": "https://github.com/paradust7/benchmarks/commit/a1dc48b3e0a3d2f0f38de8cdbd638123cecfd869"
        },
        "date": 1652037140596,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.01242,
            "range": "± 0.000165",
            "unit": "us",
            "extra": "100 samples\n2122 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.575294,
            "range": "± 0.016402",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.395888,
            "range": "± 0.028283",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.05225,
            "range": "± 0.045162",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.072514,
            "range": "± 0.042245",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 175.12329,
            "range": "± 3.272694",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 127.08842,
            "range": "± 2.953630",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 354.90172,
            "range": "± 3.121990",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.474027,
            "range": "± 0.013480",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.363836,
            "range": "± 0.027084",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.476277,
            "range": "± 0.009119",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.274071,
            "range": "± 0.027276",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 127.6724,
            "range": "± 1.327082",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 616.92072,
            "range": "± 10.035665",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 127.60745,
            "range": "± 1.442263",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 597.91732,
            "range": "± 2.305134",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.897817,
            "range": "± 0.022408",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 5.668706,
            "range": "± 0.407718",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.7703,
            "range": "± 0.027023",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 3.9655,
            "range": "± 0.178818",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 515.85672,
            "range": "± 4.616789",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5016.13689,
            "range": "± 200.634858",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 384.6433,
            "range": "± 5.173829",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3580.67578,
            "range": "± 141.777982",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
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
          "id": "a09928fbb51e8997ea07831041654b022a9332d7",
          "message": "Minetest: a66e6d4dff0b1dad065297442981718d7f7aec55 | Irrlicht: 372b3642bf524da2694cc09bdc8bdacb23f5fd0e",
          "timestamp": "2022-05-08T18:07:44Z",
          "tree_id": "e127c65735d681fe3b532976b5bc09db4f6e0e00",
          "url": "https://github.com/paradust7/benchmarks/commit/a09928fbb51e8997ea07831041654b022a9332d7"
        },
        "date": 1652038504483,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012236,
            "range": "± 0.002302",
            "unit": "us",
            "extra": "100 samples\n2555 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.837604,
            "range": "± 0.470157",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.518605,
            "range": "± 0.148590",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.401787,
            "range": "± 0.295727",
            "unit": "us",
            "extra": "100 samples\n24 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.077554,
            "range": "± 0.968687",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 242.06912,
            "range": "± 21.288999",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 185.19834,
            "range": "± 124.565815",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 480.53107,
            "range": "± 51.962196",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.672441,
            "range": "± 0.083349",
            "unit": "us",
            "extra": "100 samples\n50 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.685669,
            "range": "± 0.219996",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.773086,
            "range": "± 0.525815",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.806447,
            "range": "± 0.643577",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 170.87123,
            "range": "± 33.978115",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 929.50623,
            "range": "± 154.318804",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 163.06042,
            "range": "± 27.138896",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 918.04037,
            "range": "± 217.875148",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.30458,
            "range": "± 0.443639",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.78842,
            "range": "± 2.545021",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.13244,
            "range": "± 0.371440",
            "unit": "us",
            "extra": "100 samples\n32 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.049002,
            "range": "± 0.813472",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 694.46751,
            "range": "± 63.246999",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6651.57176,
            "range": "± 309.349456",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 543.4154,
            "range": "± 106.192995",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4564.22923,
            "range": "± 356.441128",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
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
          "id": "a09928fbb51e8997ea07831041654b022a9332d7",
          "message": "Minetest: a66e6d4dff0b1dad065297442981718d7f7aec55 | Irrlicht: 372b3642bf524da2694cc09bdc8bdacb23f5fd0e",
          "timestamp": "2022-05-08T18:07:44Z",
          "tree_id": "e127c65735d681fe3b532976b5bc09db4f6e0e00",
          "url": "https://github.com/paradust7/benchmarks/commit/a09928fbb51e8997ea07831041654b022a9332d7"
        },
        "date": 1652045426818,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016643,
            "range": "± 0.001137",
            "unit": "us",
            "extra": "100 samples\n2057 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.73185,
            "range": "± 0.055651",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.465345,
            "range": "± 0.061746",
            "unit": "us",
            "extra": "100 samples\n65 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.243378,
            "range": "± 0.155755",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.304872,
            "range": "± 0.364054",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 231.3365,
            "range": "± 9.147156",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 159.18375,
            "range": "± 14.042607",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 455.45242,
            "range": "± 21.115503",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.614716,
            "range": "± 0.037754",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.760379,
            "range": "± 0.055307",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.648311,
            "range": "± 0.013379",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.706036,
            "range": "± 0.128442",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 159.08822,
            "range": "± 12.780471",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 748.61348,
            "range": "± 39.239781",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 164.02267,
            "range": "± 6.642230",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 740.89197,
            "range": "± 29.906859",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.072053,
            "range": "± 0.103281",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.265156,
            "range": "± 0.493271",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.0486,
            "range": "± 0.109286",
            "unit": "us",
            "extra": "100 samples\n33 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.078551,
            "range": "± 0.567681",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 687.64966,
            "range": "± 24.135393",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6292.73588,
            "range": "± 215.987100",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 499.62041,
            "range": "± 32.299458",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4369.64501,
            "range": "± 158.188489",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "committer": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "distinct": true,
          "id": "c0af135d342d952215d415a83aa67eebb306968e",
          "message": "Combine workflows",
          "timestamp": "2022-05-08T21:48:23Z",
          "tree_id": "597c052f50ae9ecbbe934f91c2d696e5ed31596d",
          "url": "https://github.com/paradust7/benchmarks/commit/c0af135d342d952215d415a83aa67eebb306968e"
        },
        "date": 1652047005948,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.010135,
            "range": "± 0.001930",
            "unit": "us",
            "extra": "100 samples\n2671 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.635698,
            "range": "± 0.281980",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.608966,
            "range": "± 0.278428",
            "unit": "us",
            "extra": "100 samples\n59 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.048364,
            "range": "± 0.079613",
            "unit": "us",
            "extra": "100 samples\n22 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.782146,
            "range": "± 2.701135",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.47912,
            "range": "± 28.066558",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 138.47908,
            "range": "± 51.654211",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 387.22124,
            "range": "± 116.725169",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.567176,
            "range": "± 0.210865",
            "unit": "us",
            "extra": "100 samples\n45 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.376231,
            "range": "± 0.065247",
            "unit": "us",
            "extra": "100 samples\n17 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.552366,
            "range": "± 0.193539",
            "unit": "us",
            "extra": "100 samples\n49 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.328218,
            "range": "± 0.046443",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 152.27901,
            "range": "± 27.793292",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 917.96811,
            "range": "± 238.713568",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 156.22602,
            "range": "± 28.996915",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 734.80491,
            "range": "± 98.575633",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.00274,
            "range": "± 0.276296",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 5.625854,
            "range": "± 0.705002",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.993581,
            "range": "± 0.230029",
            "unit": "us",
            "extra": "100 samples\n28 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 3.994287,
            "range": "± 0.452056",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 587.41013,
            "range": "± 104.486422",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5381.55607,
            "range": "± 560.276226",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 405.01253,
            "range": "± 51.354388",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4168.56714,
            "range": "± 718.005357",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09aa2a24cc45330fbafc20fbdfbd4732000f6178",
          "message": "Merge branch 'minetest:master' into master",
          "timestamp": "2022-05-08T15:12:38-07:00",
          "tree_id": "597c052f50ae9ecbbe934f91c2d696e5ed31596d",
          "url": "https://github.com/paradust7/benchmarks/commit/09aa2a24cc45330fbafc20fbdfbd4732000f6178"
        },
        "date": 1652048360075,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012432,
            "range": "± 0.000366",
            "unit": "us",
            "extra": "100 samples\n2132 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.550494,
            "range": "± 0.009016",
            "unit": "us",
            "extra": "100 samples\n49 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.393003,
            "range": "± 0.011922",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.03166,
            "range": "± 0.083889",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.070036,
            "range": "± 0.090665",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 174.26016,
            "range": "± 2.119106",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 126.55481,
            "range": "± 2.009481",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 347.49355,
            "range": "± 6.330486",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.47793,
            "range": "± 0.011797",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.314962,
            "range": "± 0.026518",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.496771,
            "range": "± 0.013726",
            "unit": "us",
            "extra": "100 samples\n52 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.257812,
            "range": "± 0.022221",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 156.98438,
            "range": "± 1.133646",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 579.12149,
            "range": "± 4.147313",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 167.47022,
            "range": "± 7.793289",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 564.73418,
            "range": "± 9.692180",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.899607,
            "range": "± 0.028273",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.063248,
            "range": "± 0.108695",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.758864,
            "range": "± 0.012765",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.115464,
            "range": "± 0.053596",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 516.12924,
            "range": "± 3.533417",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5035.45493,
            "range": "± 206.520066",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 383.57319,
            "range": "± 6.481918",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3623.48015,
            "range": "± 123.880963",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sfan5@live.de",
            "name": "sfan5",
            "username": "sfan5"
          },
          "committer": {
            "email": "sfan5@live.de",
            "name": "sfan5",
            "username": "sfan5"
          },
          "distinct": true,
          "id": "5f9bf04df20c57c6cedd609f4613e5998e9efbc7",
          "message": "test",
          "timestamp": "2022-05-08T20:26:41+02:00",
          "tree_id": "e127c65735d681fe3b532976b5bc09db4f6e0e00",
          "url": "https://github.com/paradust7/benchmarks/commit/5f9bf04df20c57c6cedd609f4613e5998e9efbc7"
        },
        "date": 1652048403915,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.01407,
            "range": "± 0.000290",
            "unit": "us",
            "extra": "100 samples\n2107 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.62449,
            "range": "± 0.012078",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.449799,
            "range": "± 0.011712",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.162328,
            "range": "± 0.026023",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.910912,
            "range": "± 0.092240",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.74953,
            "range": "± 1.172374",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 142.72858,
            "range": "± 1.072766",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 392.93621,
            "range": "± 1.719199",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.538456,
            "range": "± 0.011635",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.512676,
            "range": "± 0.031001",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.551603,
            "range": "± 0.015575",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.461217,
            "range": "± 0.019708",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 164.90202,
            "range": "± 4.239900",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 655.12076,
            "range": "± 2.335254",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 144.17559,
            "range": "± 1.974916",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.05447,
            "range": "± 2.132722",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.019285,
            "range": "± 0.020485",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.33591,
            "range": "± 0.131600",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.871415,
            "range": "± 0.019932",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.312219,
            "range": "± 0.106608",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 585.50115,
            "range": "± 7.104430",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5719.88113,
            "range": "± 193.176578",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 435.16558,
            "range": "± 4.719578",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3995.34318,
            "range": "± 156.944232",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
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
          "id": "0021bcb5eb3663c90dd256f6adee1663aa206230",
          "message": "Minetest: a66e6d4dff0b1dad065297442981718d7f7aec55 | Irrlicht: 372b3642bf524da2694cc09bdc8bdacb23f5fd0e",
          "timestamp": "2022-05-08T18:25:03Z",
          "tree_id": "e127c65735d681fe3b532976b5bc09db4f6e0e00",
          "url": "https://github.com/paradust7/benchmarks/commit/0021bcb5eb3663c90dd256f6adee1663aa206230"
        },
        "date": 1652048414699,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014075,
            "range": "± 0.000288",
            "unit": "us",
            "extra": "100 samples\n2115 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.62888,
            "range": "± 0.010413",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.446287,
            "range": "± 0.014845",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.160702,
            "range": "± 0.026391",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.916866,
            "range": "± 0.116199",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.77372,
            "range": "± 1.611647",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.07025,
            "range": "± 1.100346",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 393.89443,
            "range": "± 2.093115",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.540079,
            "range": "± 0.038429",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.491363,
            "range": "± 0.016693",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.538076,
            "range": "± 0.007192",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.43206,
            "range": "± 0.035281",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.30125,
            "range": "± 1.387059",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 655.93772,
            "range": "± 2.400236",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 144.34326,
            "range": "± 1.142532",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 640.46631,
            "range": "± 4.235196",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.021108,
            "range": "± 0.033744",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.301452,
            "range": "± 0.190667",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.86355,
            "range": "± 0.024020",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.312893,
            "range": "± 0.156806",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 582.79076,
            "range": "± 7.114872",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5395.59994,
            "range": "± 12.509885",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 434.69375,
            "range": "± 5.046812",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3772.96377,
            "range": "± 7.797016",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "committer": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "distinct": true,
          "id": "c1d1edc7b81fedddf67e9b1884ec3a2ee6ec1169",
          "message": "last test",
          "timestamp": "2022-05-08T22:22:28Z",
          "tree_id": "597c052f50ae9ecbbe934f91c2d696e5ed31596d",
          "url": "https://github.com/paradust7/benchmarks/commit/c1d1edc7b81fedddf67e9b1884ec3a2ee6ec1169"
        },
        "date": 1652048961115,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014048,
            "range": "± 0.000011",
            "unit": "us",
            "extra": "100 samples\n2098 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.625424,
            "range": "± 0.015556",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.442796,
            "range": "± 0.007061",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.157129,
            "range": "± 0.021327",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.891484,
            "range": "± 0.029502",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.56934,
            "range": "± 1.064940",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.05771,
            "range": "± 1.133977",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 393.34866,
            "range": "± 1.337540",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.53531,
            "range": "± 0.007667",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.486209,
            "range": "± 0.023578",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.538614,
            "range": "± 0.010295",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.426017,
            "range": "± 0.029473",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 143.89568,
            "range": "± 1.218171",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 655.69877,
            "range": "± 2.425574",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 143.92069,
            "range": "± 1.270190",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 640.68861,
            "range": "± 3.915300",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.019745,
            "range": "± 0.033756",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.380874,
            "range": "± 0.119763",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.862353,
            "range": "± 0.021736",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.286333,
            "range": "± 0.082037",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 583.81994,
            "range": "± 7.568232",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5426.3161,
            "range": "± 18.869017",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 435.49117,
            "range": "± 4.657786",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3817.47209,
            "range": "± 13.266135",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "committer": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "distinct": true,
          "id": "70bba1a4d7f72fcd3e7cb34f7eb5dd0cb07062d9",
          "message": "Final final test",
          "timestamp": "2022-05-08T22:31:07Z",
          "tree_id": "6adae02814729f15c94a288805eb2b9cd51a2ab9",
          "url": "https://github.com/paradust7/benchmarks/commit/70bba1a4d7f72fcd3e7cb34f7eb5dd0cb07062d9"
        },
        "date": 1652049493823,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014045,
            "range": "± 0.000018",
            "unit": "us",
            "extra": "100 samples\n2114 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.6248,
            "range": "± 0.012892",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.450037,
            "range": "± 0.010667",
            "unit": "us",
            "extra": "100 samples\n66 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.160516,
            "range": "± 0.021401",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.90829,
            "range": "± 0.080654",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.57664,
            "range": "± 0.955744",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.35592,
            "range": "± 1.520924",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 398.84001,
            "range": "± 1.804708",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.537846,
            "range": "± 0.010425",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.488919,
            "range": "± 0.026591",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.540292,
            "range": "± 0.009226",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.445541,
            "range": "± 0.017062",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 143.87896,
            "range": "± 0.991367",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 666.63619,
            "range": "± 2.311640",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 143.68986,
            "range": "± 1.339324",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 650.3885,
            "range": "± 2.909988",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.018847,
            "range": "± 0.026336",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.336688,
            "range": "± 0.135680",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.862212,
            "range": "± 0.017810",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.324057,
            "range": "± 0.182499",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 585.41305,
            "range": "± 7.626115",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5412.28785,
            "range": "± 9.501687",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 433.98614,
            "range": "± 4.348426",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3820.12816,
            "range": "± 12.944028",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "paradust7",
            "username": "paradust7",
            "email": "102263465+paradust7@users.noreply.github.com"
          },
          "committer": {
            "name": "paradust7",
            "username": "paradust7",
            "email": "102263465+paradust7@users.noreply.github.com"
          },
          "id": "70bba1a4d7f72fcd3e7cb34f7eb5dd0cb07062d9",
          "message": "Final final test",
          "timestamp": "2022-05-08T22:31:07Z",
          "url": "https://github.com/paradust7/benchmarks/commit/70bba1a4d7f72fcd3e7cb34f7eb5dd0cb07062d9"
        },
        "date": 1652050396042,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012853,
            "range": "± 0.003339",
            "unit": "us",
            "extra": "100 samples\n2684 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.810765,
            "range": "± 0.271914",
            "unit": "us",
            "extra": "100 samples\n42 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.578726,
            "range": "± 0.227678",
            "unit": "us",
            "extra": "100 samples\n58 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.518745,
            "range": "± 0.325486",
            "unit": "us",
            "extra": "100 samples\n23 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.375879,
            "range": "± 1.516593",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 252.29592,
            "range": "± 29.968946",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 181.43668,
            "range": "± 30.096069",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 503.58986,
            "range": "± 49.189030",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.700461,
            "range": "± 0.172115",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.970478,
            "range": "± 0.411843",
            "unit": "us",
            "extra": "100 samples\n17 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.694757,
            "range": "± 0.107595",
            "unit": "us",
            "extra": "100 samples\n49 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.865691,
            "range": "± 0.376684",
            "unit": "us",
            "extra": "100 samples\n19 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 174.03759,
            "range": "± 23.398796",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 926.55518,
            "range": "± 79.058409",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 196.44965,
            "range": "± 66.445364",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 896.77388,
            "range": "± 156.974008",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.379157,
            "range": "± 0.525590",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 8.012618,
            "range": "± 2.000543",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.097502,
            "range": "± 0.263926",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.333154,
            "range": "± 1.500394",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 716.84552,
            "range": "± 69.610212",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 7133.39135,
            "range": "± 779.611333",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 564.4399,
            "range": "± 122.423187",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4890.02069,
            "range": "± 289.192962",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "paradust7",
            "username": "paradust7",
            "email": "102263465+paradust7@users.noreply.github.com"
          },
          "committer": {
            "name": "paradust7",
            "username": "paradust7",
            "email": "102263465+paradust7@users.noreply.github.com"
          },
          "id": "70bba1a4d7f72fcd3e7cb34f7eb5dd0cb07062d9",
          "message": "Final final test",
          "timestamp": "2022-05-08T22:31:07Z",
          "url": "https://github.com/paradust7/benchmarks/commit/70bba1a4d7f72fcd3e7cb34f7eb5dd0cb07062d9"
        },
        "date": 1652050759963,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014065,
            "range": "± 0.000267",
            "unit": "us",
            "extra": "100 samples\n2117 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.626362,
            "range": "± 0.017923",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.452408,
            "range": "± 0.013389",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.177014,
            "range": "± 0.020720",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.902082,
            "range": "± 0.030670",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.4353,
            "range": "± 1.074543",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.45868,
            "range": "± 0.974902",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 393.18259,
            "range": "± 1.535564",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.536971,
            "range": "± 0.012728",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.507418,
            "range": "± 0.030262",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.540006,
            "range": "± 0.011475",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.433017,
            "range": "± 0.029830",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.79969,
            "range": "± 1.439509",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 656.20059,
            "range": "± 2.829960",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 144.30369,
            "range": "± 0.927244",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.11449,
            "range": "± 2.173650",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.017179,
            "range": "± 0.020004",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.833078,
            "range": "± 0.138204",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.872753,
            "range": "± 0.018857",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.366766,
            "range": "± 0.145562",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 582.28885,
            "range": "± 6.078005",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5695.31882,
            "range": "± 192.669872",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 433.80307,
            "range": "± 4.742143",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3963.22342,
            "range": "± 142.661364",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}