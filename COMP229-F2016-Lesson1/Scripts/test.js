No. 4
select last, first
from prob_officers where prob_id in (
select prob_id from (
select prob_id, count(*) c, (select AVG(count(*))
from sentences
where type = 'P'
group by prob_id) a
from sentences
where type = 'P'
group by prob_id)
where c < a);


No. 6
select * from crimes where crime_id in (
select crime_id from crime_charges
where fine_amount > 
(select AVG(fine_amount) from crime_charges)
and
amount_paid < (select AVG(amount_paid) from crime_charges));


--using join
select * from crimes 
join crime_charges using (crime_id)
where fine_amount > 
(select AVG(fine_amount) from crime_charges)
and
amount_paid < (select AVG(amount_paid) from crime_charges);


No. 7
--using join
select last, first
from criminals join crimes using (criminal_id)
where crime_id = 10089;


--old solution
select last, first
from criminals
where criminal_id in
(select criminal_id from crimes where crime_id = 10089);



No. 8
select * from criminals
where criminal_id in (select distinct criminal_id from sentences
where type = 'P' and start_date is not null
and end_date is not null);

--using join
select * from criminals
join sentences using (criminal_id)
where type = 'P' and start_date is not null
and end_date is not null;
