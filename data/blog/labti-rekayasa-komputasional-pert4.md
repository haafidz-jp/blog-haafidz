---
title: Lab TI Rekayasa Komputasional Pert 4
date: '2021-07-02'
tags: ['fortran']
draft: false
summary: Membahas tentang Polinomial.
images: []
---

# Lab TI Rekayasa Komputasional Pert 4

Berikut ini adalah kodingan pertemuan 4 pada [Lab TI](http://ti.lab.gunadarma.ac.id/praktikum/my/) Gunadarma.

jadi file yang dibutuhkan sebagai berikut :

- main.f95

Kunjungi [Compiler Online](https://www.onlinegdb.com/online_fortran_compiler)

```fortran:main.f95
    INTEGER KOEF(20),XNYA,HASIL
    INTEGER RNYA,KOEFNYA,XNYA1,KALI,HAS(20)
    HASIL=0
    WRITE(*,'(24(/))')
    WRITE(*,*)'POLINOMIAL'
    WRITE(*,'(A,/)')'PANGKAT TERTINGGI:'
    READ(*,'(I3)')IPANGKAT
    DO 10 I=IPANGKAT+1,1,-1
    WRITE(*,'(A,I2,A,/)')'KOEFISIEN X^',I-1,'='
    READ(*,'(I3)')KOEF(I)
10  CONTINUE
    WRITE(*,'(A,/)')'FX(X)='
    DO 20 I=IPANGKAT+1,1,-1
    WRITE(*,'(I3,A,I1,/)') KOEF(I),'X^',I-1
    IF(i.GT.1)THEN
    WRITE(*,'(A,/)') 'T'
    END IF
20  CONTINUE
    WRITE(*,*)
    WRITE(*,'(A,/)')'X='
    READ(*,'(I3)')XNYA
    DO 30 I=IPANGKAT+1,1,-1
    HASIL=HASIL+(KOEF(I)*XNYA**(I-1))
30  CONTINUE
    WRITE(*,*)
    WRITE(*,'(A,I3,A,I6)')'F(',XNYA,')=',HASIL
    END
```
