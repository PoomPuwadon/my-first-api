1. 
BUG: curl request froze because the program didn't touch the res.json line, I didn't know req.params.id was a string
FIX: used parseInt(req.params.id, 10)

1.1.
BUG: float could be used as path, and for checking weird ID's NaN isn't equal to anything including itself
FIX: change to Number.isInteger