https://sergeychunkevich.com/animaciya-elementa-pri-skrollinge-kombinaciya-animate-css-wow-js/

��� ���������?

��� 1
��� ������ ��� ����� ������� ��� ��� ����� (�WOW.js� � �Animate.css�)

��� 2
�������� ����� �wow-animation� � �������� ����� �����. �������, �� ������ ��������� �� � ����� �����, �������, ����� ���� � ������ �� ������� ����������. ���������� ��� �� ��������� ��� ����� � �������� �����: index.html. ���� ��� WordPress, �� ��������� ����� ���� ������. (������� � ������� ���������� ���� � ���).

��� 3
�������� � <head></head> ��� ������:

<link rel="stylesheet" type="text/css" href="wow-animation/animate.min.css">

* �����������, ��������� ���������� ���� � �����. ���� �������������� �� WordPress, �� ���������� ��������� ������ ����, �.�. ������� � httpS://�������� � �.�. ����� ���������, ��������� �� �� ���������� ���� � ���������� URL, ������� � �������� ������ � ������� �Enter�. ���� ��������� ���� � ���������� �����, ������ ��� �� ??

��� 4
�������� � ����� ��� �������� ����� </body> ��� ������:

<script src="wow-animation/wow.min.js"></script>
<script>
    new WOW().init();
</script>

��� 5
��������� ��� ������ ��� ������ ��������, ���: 
����� wow � ����������� �������� � �������;
����� fadeInRight � ������������ ����� ��� �������� ��������.
����� ����������: fadeInRight (Left/Up/Down) � bounceInRight (Left/Up/Down)
��� ����� �� ������ ���������� �����: Animate.css: ������� �������� - https://daneden.github.io/animate.css/

<div class="wow fadeInRight">
    ������������ ����������
</div>

��� 6
����������� ���������. ��������� �������:
data-wow-duration: ������ ����������������� ��������;
data-wow-delay: �������� ����� ������� ��������;
data-wow-offset: ���������� �� ������� �������� (������������ ������ ����� ���� ��������);
data-wow-iteration: ��������� �������� ��������-�� ���.

<div class="wow slideInLeft" data-wow-duration="3.5s" data-wow-delay="1s" data-wow-offset="120">
    ������������ ����������
</div>

<!-- �� ������ ������������ ����� ���, ��� ������: -->

<h1 class="wow slideInLeft" data-wow-duration="3.5s" data-wow-delay="1s" data-wow-offset="120">
    ������������ ����������
</h1>
