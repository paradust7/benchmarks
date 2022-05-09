window.BENCHMARK_DATA = {
  "lastUpdate": 1652081976040,
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
        "date": 1652051674462,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014078,
            "range": "± 0.000365",
            "unit": "us",
            "extra": "100 samples\n2117 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.636729,
            "range": "± 0.012477",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.444015,
            "range": "± 0.009643",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.172,
            "range": "± 0.024359",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.915,
            "range": "± 0.130383",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 198.244,
            "range": "± 1.169470",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 140.89881,
            "range": "± 1.643914",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 393.13247,
            "range": "± 1.868523",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.536892,
            "range": "± 0.013835",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.521665,
            "range": "± 0.025841",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.539571,
            "range": "± 0.014877",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.454855,
            "range": "± 0.039114",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.33079,
            "range": "± 1.346539",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 657.54794,
            "range": "± 2.606279",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 143.87233,
            "range": "± 1.586820",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.54,
            "range": "± 2.166864",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.018995,
            "range": "± 0.025652",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.325574,
            "range": "± 0.143832",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.8644,
            "range": "± 0.015906",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.339143,
            "range": "± 0.058117",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 582.96687,
            "range": "± 5.091752",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5401.77537,
            "range": "± 9.005076",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 435.1624,
            "range": "± 4.190263",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3830.72306,
            "range": "± 10.702299",
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
        "date": 1652052886567,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012419,
            "range": "± 0.000224",
            "unit": "us",
            "extra": "100 samples\n2124 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.555025,
            "range": "± 0.013422",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.392444,
            "range": "± 0.007426",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.04416,
            "range": "± 0.023827",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.06564,
            "range": "± 0.021994",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 175.94415,
            "range": "± 5.420102",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 126.69786,
            "range": "± 3.990518",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 346.82732,
            "range": "± 6.617579",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.485503,
            "range": "± 0.016938",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.32086,
            "range": "± 0.029512",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.486603,
            "range": "± 0.013335",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.27058,
            "range": "± 0.101637",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 127.41285,
            "range": "± 1.934432",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 578.70688,
            "range": "± 2.991869",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 126.92187,
            "range": "± 1.456348",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 566.25382,
            "range": "± 7.985882",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.897573,
            "range": "± 0.014685",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 5.560838,
            "range": "± 0.154089",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.773462,
            "range": "± 0.079102",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 3.813169,
            "range": "± 0.115282",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 514.39942,
            "range": "± 8.208702",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 4781.14793,
            "range": "± 22.137686",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 384.37739,
            "range": "± 3.696160",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3364.32797,
            "range": "± 13.723538",
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
        "date": 1652053794703,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016028,
            "range": "± 0.000847",
            "unit": "us",
            "extra": "100 samples\n2137 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.725325,
            "range": "± 0.058600",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.512567,
            "range": "± 0.031949",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.41403,
            "range": "± 0.031996",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.096428,
            "range": "± 0.740795",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 228.05452,
            "range": "± 14.445889",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 171.20766,
            "range": "± 2.634135",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 457.68115,
            "range": "± 30.011721",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.643561,
            "range": "± 0.014278",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.797695,
            "range": "± 0.038198",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.655053,
            "range": "± 0.070633",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.748099,
            "range": "± 0.031203",
            "unit": "us",
            "extra": "100 samples\n22 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 172.7986,
            "range": "± 3.602705",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 772.0311,
            "range": "± 24.291145",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 167.47663,
            "range": "± 7.626073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 752.8823,
            "range": "± 26.821680",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.193993,
            "range": "± 0.069461",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.568794,
            "range": "± 0.136606",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.032452,
            "range": "± 0.021243",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.916504,
            "range": "± 0.644074",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 687.00469,
            "range": "± 29.707210",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6653.54667,
            "range": "± 245.033965",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 510.36414,
            "range": "± 18.009329",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4585.51168,
            "range": "± 187.142820",
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
        "date": 1652054332095,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016887,
            "range": "± 0.000260",
            "unit": "us",
            "extra": "100 samples\n2105 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.755522,
            "range": "± 0.041449",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.533925,
            "range": "± 0.010941",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.351997,
            "range": "± 0.098639",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.30449,
            "range": "± 0.596940",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 234.46851,
            "range": "± 8.598603",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 171.51026,
            "range": "± 5.544243",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 435.51422,
            "range": "± 47.564119",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.627534,
            "range": "± 0.078962",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.792578,
            "range": "± 0.102460",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.613142,
            "range": "± 0.071481",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.67341,
            "range": "± 0.178716",
            "unit": "us",
            "extra": "100 samples\n22 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 172.93833,
            "range": "± 1.522302",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 773.2013,
            "range": "± 35.508548",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 169.68013,
            "range": "± 6.270611",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 735.6342,
            "range": "± 45.397930",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.213701,
            "range": "± 0.144504",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.902737,
            "range": "± 0.726110",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.052643,
            "range": "± 0.041981",
            "unit": "us",
            "extra": "100 samples\n36 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.038474,
            "range": "± 0.672038",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 694.57975,
            "range": "± 17.015731",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6459.03049,
            "range": "± 83.712072",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 514.90388,
            "range": "± 15.406944",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4430.80774,
            "range": "± 202.923559",
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
        "date": 1652056463147,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014172,
            "range": "± 0.004311",
            "unit": "us",
            "extra": "100 samples\n2626 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.783007,
            "range": "± 0.029611",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.697972,
            "range": "± 0.199133",
            "unit": "us",
            "extra": "100 samples\n60 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.591362,
            "range": "± 0.480764",
            "unit": "us",
            "extra": "100 samples\n23 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.612909,
            "range": "± 1.571780",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 255.28434,
            "range": "± 30.553640",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 184.57569,
            "range": "± 23.823568",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 574.74025,
            "range": "± 96.631397",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.758647,
            "range": "± 0.299828",
            "unit": "us",
            "extra": "100 samples\n50 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 2.027463,
            "range": "± 0.503918",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.754071,
            "range": "± 0.232074",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.881898,
            "range": "± 0.415185",
            "unit": "us",
            "extra": "100 samples\n17 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 189.05954,
            "range": "± 67.776427",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 993.69145,
            "range": "± 132.129707",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 199.55667,
            "range": "± 46.626582",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 1017.60866,
            "range": "± 178.557427",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.289289,
            "range": "± 0.145134",
            "unit": "us",
            "extra": "100 samples\n27 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 8.50855,
            "range": "± 3.239714",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.565443,
            "range": "± 1.026328",
            "unit": "us",
            "extra": "100 samples\n31 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.812753,
            "range": "± 1.718154",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 827.47252,
            "range": "± 420.559813",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 7500.5292,
            "range": "± 1005.096181",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 589.07065,
            "range": "± 73.911359",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 5171.87663,
            "range": "± 482.556186",
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
        "date": 1652064078294,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.009403,
            "range": "± 0.001107",
            "unit": "us",
            "extra": "100 samples\n2662 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.757854,
            "range": "± 0.208522",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.539031,
            "range": "± 0.126022",
            "unit": "us",
            "extra": "100 samples\n52 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.372257,
            "range": "± 1.472622",
            "unit": "us",
            "extra": "100 samples\n22 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.940394,
            "range": "± 1.988408",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 265.91968,
            "range": "± 286.816319",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 150.33923,
            "range": "± 22.919747",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 409.58782,
            "range": "± 75.944584",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.602876,
            "range": "± 0.197881",
            "unit": "us",
            "extra": "100 samples\n51 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.718038,
            "range": "± 0.402136",
            "unit": "us",
            "extra": "100 samples\n16 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.583117,
            "range": "± 0.219256",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.788196,
            "range": "± 0.438505",
            "unit": "us",
            "extra": "100 samples\n19 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 155.94138,
            "range": "± 26.598381",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 851.36734,
            "range": "± 204.847048",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 156.48736,
            "range": "± 27.526831",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 742.69505,
            "range": "± 209.219938",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.957483,
            "range": "± 0.168427",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.475742,
            "range": "± 1.151218",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.898709,
            "range": "± 0.241439",
            "unit": "us",
            "extra": "100 samples\n29 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.613671,
            "range": "± 1.742632",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 638.40879,
            "range": "± 167.978509",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6487.59562,
            "range": "± 583.958801",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 529.93233,
            "range": "± 146.236347",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4675.14267,
            "range": "± 601.434338",
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
        "date": 1652067827252,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014063,
            "range": "± 0.000225",
            "unit": "us",
            "extra": "100 samples\n2117 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.625341,
            "range": "± 0.013098",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.44602,
            "range": "± 0.009040",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.15836,
            "range": "± 0.034598",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.910488,
            "range": "± 0.126857",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.71142,
            "range": "± 1.989413",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.15172,
            "range": "± 1.223242",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 392.99976,
            "range": "± 1.957478",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.535489,
            "range": "± 0.007657",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.511209,
            "range": "± 0.035193",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.538185,
            "range": "± 0.006678",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.450733,
            "range": "± 0.235843",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.03786,
            "range": "± 1.426066",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 656.32146,
            "range": "± 2.461705",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 143.70186,
            "range": "± 1.209023",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 638.75623,
            "range": "± 2.216070",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.015713,
            "range": "± 0.012796",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.748286,
            "range": "± 0.278549",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.862411,
            "range": "± 0.027765",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.298487,
            "range": "± 0.087507",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 585.26649,
            "range": "± 6.312791",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5858.38012,
            "range": "± 192.240042",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 434.55962,
            "range": "± 4.472236",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3938.57147,
            "range": "± 108.357449",
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
        "date": 1652069697750,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.015702,
            "range": "± 0.002272",
            "unit": "us",
            "extra": "100 samples\n2178 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.716143,
            "range": "± 0.094257",
            "unit": "us",
            "extra": "100 samples\n49 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.372279,
            "range": "± 0.010257",
            "unit": "us",
            "extra": "100 samples\n66 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.026458,
            "range": "± 0.197875",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 7.328428,
            "range": "± 0.702610",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.06216,
            "range": "± 28.448997",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 150.84356,
            "range": "± 18.429809",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 395.73038,
            "range": "± 52.106164",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.59738,
            "range": "± 0.016616",
            "unit": "us",
            "extra": "100 samples\n52 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.602642,
            "range": "± 0.252687",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.472009,
            "range": "± 0.046938",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.448272,
            "range": "± 0.187398",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 154.80277,
            "range": "± 14.765910",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 699.24558,
            "range": "± 66.996193",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 164.57231,
            "range": "± 7.341713",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 763.29923,
            "range": "± 17.304385",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.056705,
            "range": "± 0.155837",
            "unit": "us",
            "extra": "100 samples\n31 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 5.73973,
            "range": "± 0.655151",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.960554,
            "range": "± 0.066473",
            "unit": "us",
            "extra": "100 samples\n36 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.44297,
            "range": "± 0.376751",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 586.7982,
            "range": "± 65.943461",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5694.05819,
            "range": "± 350.776111",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 474.14877,
            "range": "± 44.639914",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4032.98106,
            "range": "± 330.003478",
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
        "date": 1652072039768,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016713,
            "range": "± 0.001231",
            "unit": "us",
            "extra": "100 samples\n2078 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.755763,
            "range": "± 0.065607",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.535939,
            "range": "± 0.025909",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.393689,
            "range": "± 0.021881",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.254038,
            "range": "± 0.136820",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 232.60042,
            "range": "± 12.272295",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 170.6401,
            "range": "± 6.987905",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 453.85429,
            "range": "± 28.298581",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.672636,
            "range": "± 0.087771",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.776144,
            "range": "± 0.171229",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.628222,
            "range": "± 0.044958",
            "unit": "us",
            "extra": "100 samples\n53 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.790233,
            "range": "± 0.165375",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 174.04712,
            "range": "± 5.697181",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 754.42854,
            "range": "± 51.696028",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 169.96393,
            "range": "± 9.141134",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 727.65506,
            "range": "± 53.998565",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.211546,
            "range": "± 0.068940",
            "unit": "us",
            "extra": "100 samples\n29 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.343388,
            "range": "± 0.642096",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.036083,
            "range": "± 0.029156",
            "unit": "us",
            "extra": "100 samples\n34 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.260127,
            "range": "± 0.504330",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 671.81282,
            "range": "± 35.322000",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6502.66382,
            "range": "± 179.003302",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 512.45288,
            "range": "± 20.556649",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4515.29005,
            "range": "± 108.107992",
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
        "date": 1652073389637,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012925,
            "range": "± 0.002599",
            "unit": "us",
            "extra": "100 samples\n2507 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.782801,
            "range": "± 0.221029",
            "unit": "us",
            "extra": "100 samples\n38 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.592354,
            "range": "± 0.202125",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.416157,
            "range": "± 0.240014",
            "unit": "us",
            "extra": "100 samples\n22 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.097216,
            "range": "± 1.264477",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 235.38537,
            "range": "± 29.561110",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 165.08836,
            "range": "± 19.318098",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 513.09235,
            "range": "± 71.698626",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.697946,
            "range": "± 0.217700",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.810144,
            "range": "± 0.420617",
            "unit": "us",
            "extra": "100 samples\n17 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.634243,
            "range": "± 0.117346",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.916139,
            "range": "± 0.712853",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 178.89458,
            "range": "± 21.555365",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 932.34733,
            "range": "± 84.526583",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 180.13255,
            "range": "± 27.037611",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 915.60105,
            "range": "± 279.781610",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.39438,
            "range": "± 0.564648",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.229106,
            "range": "± 0.543164",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.058176,
            "range": "± 0.303647",
            "unit": "us",
            "extra": "100 samples\n31 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.019573,
            "range": "± 1.094011",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 757.53071,
            "range": "± 382.914792",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6717.06013,
            "range": "± 298.327635",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 558.78491,
            "range": "± 53.770010",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4627.38366,
            "range": "± 351.138023",
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
        "date": 1652074713538,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016888,
            "range": "± 0.000253",
            "unit": "us",
            "extra": "100 samples\n2097 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.751656,
            "range": "± 0.014772",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.533365,
            "range": "± 0.006862",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.385442,
            "range": "± 0.052903",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.245586,
            "range": "± 0.050620",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 236.47728,
            "range": "± 4.538561",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 172.12778,
            "range": "± 2.684777",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 473.702,
            "range": "± 2.487276",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.661657,
            "range": "± 0.014902",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.797775,
            "range": "± 0.037927",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.647209,
            "range": "± 0.015751",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.73174,
            "range": "± 0.040853",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 172.78802,
            "range": "± 0.558929",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 799.43661,
            "range": "± 5.371427",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 172.25098,
            "range": "± 1.396554",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 777.99213,
            "range": "± 2.762127",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.222885,
            "range": "± 0.031166",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.655534,
            "range": "± 0.162852",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.048645,
            "range": "± 0.081916",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.245654,
            "range": "± 0.088703",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 699.68968,
            "range": "± 7.551052",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6545.36559,
            "range": "± 41.391396",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 520.23711,
            "range": "± 8.366083",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4580.38815,
            "range": "± 9.564970",
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
        "date": 1652075532652,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.010936,
            "range": "± 0.002557",
            "unit": "us",
            "extra": "100 samples\n2525 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.772705,
            "range": "± 0.269711",
            "unit": "us",
            "extra": "100 samples\n42 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.457594,
            "range": "± 0.132847",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.295593,
            "range": "± 0.370611",
            "unit": "us",
            "extra": "100 samples\n23 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.26566,
            "range": "± 0.553680",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 210.1083,
            "range": "± 34.170289",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 165.20788,
            "range": "± 31.137388",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 437.77841,
            "range": "± 68.009902",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.689448,
            "range": "± 0.274574",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.945586,
            "range": "± 0.786328",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.593884,
            "range": "± 0.167646",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.663821,
            "range": "± 0.568494",
            "unit": "us",
            "extra": "100 samples\n19 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 149.19412,
            "range": "± 19.751211",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 884.58068,
            "range": "± 109.029413",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 161.88389,
            "range": "± 24.193338",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 873.56482,
            "range": "± 65.188379",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.177665,
            "range": "± 0.377243",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 8.12569,
            "range": "± 2.638406",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.102607,
            "range": "± 0.365309",
            "unit": "us",
            "extra": "100 samples\n29 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.72294,
            "range": "± 1.120793",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 686.63114,
            "range": "± 94.534885",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6175.49805,
            "range": "± 463.028327",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 494.69074,
            "range": "± 86.549453",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4387.38688,
            "range": "± 353.489477",
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
        "date": 1652075968332,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014075,
            "range": "± 0.000250",
            "unit": "us",
            "extra": "100 samples\n2116 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.624363,
            "range": "± 0.012258",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.447693,
            "range": "± 0.010069",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.165593,
            "range": "± 0.023304",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.912096,
            "range": "± 0.090856",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.98279,
            "range": "± 4.581312",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.50702,
            "range": "± 1.358736",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 393.27057,
            "range": "± 1.600778",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.572598,
            "range": "± 0.073291",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.528822,
            "range": "± 0.066653",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.538222,
            "range": "± 0.008065",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.443545,
            "range": "± 0.028249",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.38603,
            "range": "± 2.104080",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 655.86423,
            "range": "± 2.523387",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 143.87402,
            "range": "± 1.166612",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 638.83899,
            "range": "± 2.092528",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.018448,
            "range": "± 0.028752",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.388286,
            "range": "± 0.122284",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.862841,
            "range": "± 0.030785",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.42549,
            "range": "± 0.144250",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 583.82629,
            "range": "± 6.932704",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5667.95336,
            "range": "± 163.190518",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 434.29116,
            "range": "± 5.460002",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3990.0696,
            "range": "± 125.368053",
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
        "date": 1652077305160,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013084,
            "range": "± 0.002584",
            "unit": "us",
            "extra": "100 samples\n2702 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.859671,
            "range": "± 0.192240",
            "unit": "us",
            "extra": "100 samples\n42 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.601107,
            "range": "± 0.168022",
            "unit": "us",
            "extra": "100 samples\n58 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.48853,
            "range": "± 0.249884",
            "unit": "us",
            "extra": "100 samples\n23 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.462889,
            "range": "± 1.422574",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 301.11572,
            "range": "± 69.672480",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 183.77906,
            "range": "± 24.318809",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 534.6301,
            "range": "± 122.913333",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.773265,
            "range": "± 0.315847",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.869288,
            "range": "± 0.052677",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.676837,
            "range": "± 0.155630",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.927695,
            "range": "± 0.423882",
            "unit": "us",
            "extra": "100 samples\n19 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 179.79902,
            "range": "± 26.319567",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 992.57472,
            "range": "± 134.315975",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 194.94615,
            "range": "± 49.110250",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 908.04245,
            "range": "± 58.909751",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.274596,
            "range": "± 0.354252",
            "unit": "us",
            "extra": "100 samples\n27 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 8.019816,
            "range": "± 1.158660",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.169941,
            "range": "± 0.454100",
            "unit": "us",
            "extra": "100 samples\n32 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.656176,
            "range": "± 2.677840",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 747.1634,
            "range": "± 82.824180",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 7108.00632,
            "range": "± 671.628885",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 549.71425,
            "range": "± 64.804244",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 5105.51576,
            "range": "± 489.848081",
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
        "date": 1652078850382,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016569,
            "range": "± 0.001135",
            "unit": "us",
            "extra": "100 samples\n2225 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.735024,
            "range": "± 0.069325",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.53824,
            "range": "± 0.046337",
            "unit": "us",
            "extra": "100 samples\n69 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.171738,
            "range": "± 0.182397",
            "unit": "us",
            "extra": "100 samples\n24 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.826046,
            "range": "± 1.534303",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 199.08802,
            "range": "± 28.486858",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 162.83158,
            "range": "± 9.627733",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 393.59346,
            "range": "± 47.820878",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.581162,
            "range": "± 0.097988",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.459711,
            "range": "± 0.118180",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.610481,
            "range": "± 0.059859",
            "unit": "us",
            "extra": "100 samples\n52 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.409741,
            "range": "± 0.237960",
            "unit": "us",
            "extra": "100 samples\n23 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.4418,
            "range": "± 19.095238",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 644.80174,
            "range": "± 86.535669",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 144.0856,
            "range": "± 20.462288",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 664.26436,
            "range": "± 80.544073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.032927,
            "range": "± 0.151623",
            "unit": "us",
            "extra": "100 samples\n29 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.137286,
            "range": "± 0.838507",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.035188,
            "range": "± 0.025467",
            "unit": "us",
            "extra": "100 samples\n34 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.890719,
            "range": "± 0.565624",
            "unit": "us",
            "extra": "100 samples\n8 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 593.92344,
            "range": "± 80.975659",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5472.54016,
            "range": "± 399.724273",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 443.42636,
            "range": "± 59.592397",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4313.33686,
            "range": "± 183.380279",
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
        "date": 1652079916129,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013226,
            "range": "± 0.003006",
            "unit": "us",
            "extra": "100 samples\n2508 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.805881,
            "range": "± 0.118051",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.597159,
            "range": "± 0.225656",
            "unit": "us",
            "extra": "100 samples\n58 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.525317,
            "range": "± 0.317213",
            "unit": "us",
            "extra": "100 samples\n23 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.516066,
            "range": "± 1.437919",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 249.74311,
            "range": "± 21.782328",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 181.74167,
            "range": "± 19.498985",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 546.59016,
            "range": "± 39.671326",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.668001,
            "range": "± 0.056458",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.930735,
            "range": "± 0.486777",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.698678,
            "range": "± 0.317479",
            "unit": "us",
            "extra": "100 samples\n49 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.968518,
            "range": "± 0.548946",
            "unit": "us",
            "extra": "100 samples\n18 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 174.20523,
            "range": "± 16.892028",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 956.32455,
            "range": "± 51.488529",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 207.80036,
            "range": "± 51.874774",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 929.80181,
            "range": "± 44.721980",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.313353,
            "range": "± 0.207945",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.98751,
            "range": "± 1.166590",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.07465,
            "range": "± 0.058919",
            "unit": "us",
            "extra": "100 samples\n31 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.69336,
            "range": "± 1.311472",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 733.63417,
            "range": "± 42.485923",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6893.66459,
            "range": "± 134.883882",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 562.7452,
            "range": "± 42.318378",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4966.28449,
            "range": "± 347.642691",
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
        "date": 1652081192822,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.015613,
            "range": "± 0.000110",
            "unit": "us",
            "extra": "100 samples\n2171 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 1.356032,
            "range": "± 0.417189",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.526723,
            "range": "± 0.056316",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.429381,
            "range": "± 0.283605",
            "unit": "us",
            "extra": "100 samples\n27 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.264862,
            "range": "± 0.173810",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 239.96175,
            "range": "± 13.598395",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 172.97828,
            "range": "± 7.922078",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 474.96449,
            "range": "± 13.634887",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.646137,
            "range": "± 0.030238",
            "unit": "us",
            "extra": "100 samples\n53 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.819765,
            "range": "± 0.049042",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.662278,
            "range": "± 0.093410",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.727951,
            "range": "± 0.052309",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 175.25111,
            "range": "± 9.903872",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 794.20721,
            "range": "± 21.996264",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 179.55039,
            "range": "± 43.835847",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 775.04709,
            "range": "± 25.754987",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.249734,
            "range": "± 0.237087",
            "unit": "us",
            "extra": "100 samples\n29 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.768264,
            "range": "± 0.656842",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.067126,
            "range": "± 0.179144",
            "unit": "us",
            "extra": "100 samples\n34 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.269186,
            "range": "± 0.136799",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 713.36467,
            "range": "± 45.895017",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6759.0641,
            "range": "± 336.001114",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 531.19963,
            "range": "± 39.290126",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4700.70725,
            "range": "± 92.929012",
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
        "date": 1652081975321,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014078,
            "range": "± 0.000305",
            "unit": "us",
            "extra": "100 samples\n2132 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.637279,
            "range": "± 0.012997",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.445535,
            "range": "± 0.009437",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.188977,
            "range": "± 0.034237",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.924694,
            "range": "± 0.108564",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 196.46762,
            "range": "± 1.380492",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 142.91891,
            "range": "± 1.823449",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 393.31327,
            "range": "± 1.684543",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.536288,
            "range": "± 0.011358",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.498781,
            "range": "± 0.035299",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.539632,
            "range": "± 0.012801",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.45221,
            "range": "± 0.016455",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.0859,
            "range": "± 1.287340",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 657.34174,
            "range": "± 2.547397",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 143.702,
            "range": "± 1.427085",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 641.35353,
            "range": "± 2.576082",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.017547,
            "range": "± 0.014404",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.304888,
            "range": "± 0.143097",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.860697,
            "range": "± 0.012522",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.303346,
            "range": "± 0.108007",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 585.16681,
            "range": "± 6.355340",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5421.77625,
            "range": "± 14.901229",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 434.19884,
            "range": "± 5.280997",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3825.50096,
            "range": "± 12.749375",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}