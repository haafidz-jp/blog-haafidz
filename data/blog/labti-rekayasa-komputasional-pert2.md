---
title: Lab TI Rekayasa Komputasional Pert 2
date: '2021-07-02'
tags: ['fortran']
draft: false
summary: Membahas Tentang Program Matriks.
images: []
---

# Lab TI Rekayasa Komputasional Pert 2

Berikut ini adalah kodingan pertemuan 2 pada [Lab TI](http://ti.lab.gunadarma.ac.id/praktikum/my/) Gunadarma.

jadi file yang dibutuhkan sebagai berikut :

- main.f95

Kunjungi [Compiler Online](https://www.onlinegdb.com/online_fortran_compiler)

```fortran:main.f95
    INTEGER*4 A(20,20)
    WRITE(*,'(1X,A)') 'JUMLAH BARIS MATRIKS A: '
    READ(*,'(I2)')N
    WRITE(*,'(1X,A)') 'JUMLAH KOLOM MATRIKS A: '
    READ(*,'(I2)')M
    WRITE(*,*)
    DO 101 I=1,N
        DO 100 J = 1,M
    WRITE(*,'(1X,"A(",I2,","I2,"):=")') I,J
        READ(*,'(I3)')A(I,J)
100 CONTINUE
101 CONTINUE
    WRITE(*,*)
    WRITE(*,'(/,1X,A)') 'DATA MATRIKS A : '
    DO 400 I=1,N
400 WRITE(*,'(1X,100(I3))') (A(I,J),J=1,M)
    END
```
