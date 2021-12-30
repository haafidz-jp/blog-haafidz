---
title: Lab TI Rekayasa Komputasional Pert 3
date: '2021-07-02'
tags: ['fortran']
draft: false
summary: Membahas tentang Program Tahun Kabisat.
images: []
---

# Lab TI Rekayasa Komputasional Pert 3

Berikut ini adalah kodingan pertemuan 3 pada [Lab TI](http://ti.lab.gunadarma.ac.id/praktikum/my/) Gunadarma.

jadi file yang dibutuhkan sebagai berikut :

- main.f95

Kunjungi [Compiler Online](https://www.onlinegdb.com/online_fortran_compiler)

```fortran:main.f95
    WRITE(*,'(1X,A,/)')'Tahun ?'
	READ(*,'(BN,I4)')ITahun
	XTahun = ITahun/4.0
	JTahun = ITahun/4
	IF(XTahun .EQ.JTahun)GOTO 100
	WRITE(*,'(1X,A,I4,A)')'Tahun ', ITahun,' bukan tahun kabisat'
	GOTO 200
100	WRITE(*,'(1X,A,I4,A)')'Tahun ', ITahun,' adalah tahun kabisat'
200	CONTINUE
	END
```
