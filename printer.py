import cups
conn = cups.Connection()
printers = list(conn.getPrinters().keys())
printer_name = printers[0]
conn.printFile(printer_name,
               '/home/ccy/Pictures/WhiteSur.png',"",{}) 